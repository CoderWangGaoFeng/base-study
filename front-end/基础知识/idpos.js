/**
 * 通过js模拟系统的实现逻辑
 * 使用知识：js的object属性。通过defineProperty get set
 * 目标：是否能更好实现各种联动
 */
const company = {
    _checked: false,
    _show: true,
    _value: '',//企业id
    //企业访问、设置属性
    get value(){
        return this.company
    },
    set value(value){
        //通过第三方插件选择的回调函数修改该内容
        //在该函数中可以穿插各种联动处理
        if(value !== this._value){
            goods.initModule();
        }
        this._company = value
    },
    //选择的访问、设置属性
    get checked(){
        return this._checked
    },
    set checked(value){
        //处理联动操作
        itemShowOrHide();
        if(!value){
            this.show = true
        }else{
            this.show = true
        }
        this._checked = value
    },
    //模拟show的变化
    get show(){
        return this._show
    },
    set show(value){
        this._show = value;
        if(value){
            console.log('显示企业')
        }else{
            console.log('隐藏企业')
        }
    }

}
const goods = {
    _checked: false,
    show: true,
    _value: [],
    get value(){
        return this._value
    },
    set value(value){
        //联动操作
        this._value = value
    },
    get checked(){
        return this._checked
    },
    set checked(value){
        this._checked = value
    },
    initModule(){
        //初始化module
        console.log(`模拟初始化商品`)
    }
}

//模拟全局函数
function itemShowOrHide(flag){
    if(flag){
        console.log(`关闭item`);
    }else{
        console.log(`开启item`);
    }
}

//模拟click事件
company.checked = true;//模拟选中事件
company.value = 'cocacola';//模拟选择企业事件