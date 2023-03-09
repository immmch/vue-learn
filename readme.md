一、MODULE_NOT_FOUND问题

通过npm本地安装的包，一般不会出现包找不到的问题；

这里主要讨论使用-g全局安装的包，出现MODULE_NOT_FOUND问题。

require('MODULE_NAME')命令查找的顺序是，显示缓存中查找，而后是当前目录的NODE_MODULES目录下查找，如果还是没有找到，会到环境变量NODE_PATH中去查找，如果没有配置环境变量，这是就会报：MODULE_NOT_FOUND错误。

解决办法： 
