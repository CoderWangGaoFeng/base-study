//装饰器模式:个人理解，不影响原有结构的基础上，对原有结构进行封装，并在封装里添加自己的逻辑。
//简单用例：透明缓存（对大消耗的函数的结果进行缓存）、节流、防抖
/**
 * 1.透明缓存
 */
function func(){
    //耗时耗性能的计算
    console.log('func');
}
//包装器
function cacheResult(func,...items){
    let cacheMap = new Map();//使用map的原因是，map的key可以是任意值，而object的key只能是string
    let args = [].arr.call(items);
    if(cacheMap.has(args)){
        return cacheMap.get(args);
    }
    let result = func(...items);
    cacheMap.set(args, result);
    return result;
}
