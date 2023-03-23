# FDFS使用


## 是什么
大多公司的文件服务器可能都是直接使用的阿里云或者其他的服务，如OSS，七牛云等等。
但是有部分情况下可能需要自己搭建文件服务器。FDFS就是其中一种方案


## FDFS搭建


## FDFS使用

FDFS与java的集成，使用的时候上传成功后会返回group和path。同样，获取文件也是依赖group和path

改配置类
```yaml
fdfs:
  so-timeout: 1500
  connect-timeout: 600
  tracker-list: 127.0.0.1:22122,xx.xxx.xx.xxx:22122
  web-server-url: http://127.0.0.1:9888/
```

pom依赖
```xml
        <dependency>
            <groupId>com.github.tobato</groupId>
            <artifactId>fastdfs-client</artifactId>
            <version>1.26.1-RELEASE</version>
        </dependency>

```

config类
```java
@Configuration
@Import(FdfsClientConfig.class)
@EnableMBeanExport(registration = RegistrationPolicy.IGNORE_EXISTING)
public class FDFSConfig {
}
```
util封装
```java
@Slf4j
@Component
public class FDFSClient {


    @Autowired
    private FastFileStorageClient storageClient;

    @Autowired
    private FdfsWebServer fdfsWebServer;

    /**
     * 上传文件
     *
     * @param file 文件对象
     * @return 文件访问地址
     * @throws IOException
     */
    public StorePath uploadFile(File file) throws IOException {
        FileInputStream inputStream = new FileInputStream(file);
        StorePath storePath = null;
        try {
            storePath = storageClient.uploadFile(inputStream, file.length(), FilenameUtils.getExtension(file.getName()), null);
        } catch (Exception e) {
            log.error("上传文件失败", e);
        } finally {
            if (inputStream != null) {
                inputStream.close();
            }
        }
        return storePath;
    }

    /**
     * 封装图片完整URL地址
     */
    private String getResAccessUrl(StorePath storePath) {
        String fileUrl = fdfsWebServer.getWebServerUrl() + storePath.getFullPath();
        return fileUrl;
    }

    /**
     * 删除文件
     * @param group 组名
     * @param path 路径
     **/
    public void deleteFile(String group, String path) {
        if (!StringUtils.hasLength(group)) {
            return;
        }
        try {
            storageClient.deleteFile(group, path);
        } catch (FdfsUnsupportStorePathException e) {
            log.error("删除文件错误", e);
        }
    }

    /**
     * 下载文件
     *
     * @param group group
     * @param path  path
     * @return 文件字节，文件过大请使用分段下载
     */
    public byte[] downloadFile(String group, String path) throws IOException {
        DownloadByteArray downloadByteArray = new DownloadByteArray();
        byte[] bytes = storageClient.downloadFile(group, path, downloadByteArray);
        return bytes;
    }
}
```


```java
            writeDataToExcel(tempFilePath);
            File file = new File(tempFilePath);
            // 将临时文件传到fdfs
            StorePath storePath = fdfsClient.uploadFile(file);
            log.debug("上传文件成功：{}", storePath);
            if (storePath != null) {
                xxxx
            } else {
                xxx
            }


            byte[] bytes = fdfsClient.downloadFile(reportExport.getFdfsGroup(), reportExport.getFdfsName());
            InputStream inputStream = new ByteArrayInputStream(bytes);
            String fileName = URLEncoder.encode(reportExport.getName(), "UTF-8")
                    .replaceAll("\\+", "%20");

            response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            response.setCharacterEncoding("utf-8");
            response.setHeader("Content-disposition", "attachment;filename*=utf-8''" + fileName + ".xlsx");

            byte[] buffer = new byte[1024];
            int len;
            OutputStream outputStream = response.getOutputStream();
            while ((len = inputStream.read(buffer)) > 0) {
                outputStream.write(buffer, 0, len);
            }
            inputStream.close();
```