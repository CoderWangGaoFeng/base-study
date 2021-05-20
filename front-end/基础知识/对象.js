/**
 * 对象相关知识
 */
/**
 * 属性标志: 默认值均为true
 * wriable: true/false，false时值为只读
 * enumerable: 是否可被迭代，false时不可被迭代
 * configurable: 是否可以被删除，true时可以被删除也可以修改
 */
let objProperty = {
    name:'man'
}
//获取标志
let objPropertyDescriptor = Object.getOwnPropertyDescriptor(objProperty,'name');
console.log('输出对象属性的属性标志：',objPropertyDescriptor);//{ value: 'man', writable: true, enumerable: true, configurable: true }
console.log('----------------------------------------------------------------------------------------------------');
/**
 * 设置属性标志
 * 函数： Object.defineProperty(object, propertyName, descriptor)
 */
//设置value： 修改内容 
//通过value设置的新属性，如果不设置writable、enumerable、configurable，则会被设置为false
Object.defineProperty(objProperty, 'name', {
    value: 'setName'
});
//新增值： 新增并赋值
Object.defineProperty(objProperty, 'newName', {
    value: 'newName'
});
console.log('修改现有属性值：原值： name，现值： ', objProperty.name);//修改属性值：原值： name，现值：  setName
console.log('新增属性newName并赋值newName，赋值结果为：', objProperty.newName);
console.log('----------------------------------------------------------------------------------------------------');
//修改只读属性false(设置为只读)。严格模式下，赋值会出现error，非严格模式下，编译器会忽略赋值
Object.defineProperty(objProperty, 'name', {
    writable: false
});
console.log(`设置只读属性标志后，name的属性标志为：`,Object.getOwnPropertyDescriptor(objProperty,'name'));
Object.getOwnPropertyDescriptor(objProperty, 'name')
objProperty.name = 'writable' // error
console.log('设置只读属性之后，严格模式下，赋值会出现error，普通模式下，编译器会忽略赋值。objProperty.name=', objProperty.name, );
console.log('----------------------------------------------------------------------------------------------------');
//设置为不可迭代： enumerable。
//属性newName不存在是因为newName是通过Object.defineProperty的value属性添加。
//并且添加的时候，没有设置wirtable、enumerable、configurable属性，所以这三个属性的默认值为false
console.log(`设置前打印,可迭代属性为：${Object.keys(objProperty)}`);
console.log(Object.getOwnPropertyDescriptor(objProperty, 'newName'));
console.log('----------------------------------------------------------------------------------------------------');
//删除不可删除属性
//newName的属性标志configurable是false
console.log(`输出newName的属性标志：`,Object.getOwnPropertyDescriptor(objProperty, 'newName'));
console.log(`输出name的属性标志：`,Object.getOwnPropertyDescriptor(objProperty, 'name'));
delete objProperty.newName;
console.log(`执行delete objProperty.newName之后，输出newName的值${objProperty.newName},可以看出删除失败。`);
// objProperty.newName = 'test'
// objProperty.name = 'test1'
