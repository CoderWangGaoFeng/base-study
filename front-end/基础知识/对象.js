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
    wirtable: false
});
// objProperty.name = 'writable' // error
console.log('设置只读属性之后，严格模式下，赋值会出现error，普通模式下，编译器会忽略赋值。objProperty.name=', objProperty.name);
console.log('----------------------------------------------------------------------------------------------------');
