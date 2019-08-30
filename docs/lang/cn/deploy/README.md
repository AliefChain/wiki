# 节点搭建

## 手工构建
### Linux and Mac
**安装系统工具**  

* linux  
```
    sudo apt install cmake pkg-config libssl-dev git clang libclang-dev  
```
* Mac  
```    
    brew install cmake pkg-config openssl git llvm
```  

**安装构建工具**  
    
    curl https://sh.rustup.rs -sSf | sh  
    rustup update nightly  
    rustup target add wasm32-unknown-unknown --toolchain nightly  
    rustup update stable  
    cargo install --git https://github.com/alexcrichton/wasm-gc  
      
**搭建本地节点**
  
下载alief工程
```
    git clone 
```
编译工程
```
cargo build  --release
```

之后运行账户为Alice的节点，使用默认TCP端口30333，链上数据存放在本地的/tmp/alice，启动参数中使用--node-key来设定节点的启动ID为QmRpheLN4JWdAnY7HGJfWFNbfkQCb6tFf4vvA6hgjMZKrR。
```
cargo run --release \-- \
  --base-path /tmp/alice \
  --chain=local \
  --alice \
  --node-key 0000000000000000000000000000000000000000000000000000000000000001 \
  --telemetry-url ws://telemetry.alief.io:1024 \
  --validator
```

之后运行账户为Bob的节点，使用TCP端口为30334，链上数据存放在本地的/tmp/bob。启动参数中使用--bootnodes选项指定Alice节点的启动ID，以此来连接到Alice节点。  
```
cargo run --release \-- \
  --base-path /tmp/bob \
  --bootnodes /ip4/127.0.0.1/tcp/30333/p2p/QmRpheLN4JWdAnY7HGJfWFNbfkQCb6tFf4vvA6hgjMZKrR \
  --chain=local \
  --bob \
  --port 30334 \
  --validator
```  

**搭建测试节点**  
  
  使用--name选项指定加入节点时的节点名
```
cargo run --release \-- --name my_custom_name 
```

