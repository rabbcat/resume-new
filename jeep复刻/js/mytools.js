/**
 * Created by Administrator on 2016/11/21 0021.
 */
/**
 *      通过id获取元素
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}
/**
 *      传入一个元素，把他的类名中的一项换成另一项,最后重新赋给这个类名
 * @param element
 * @param oldS
 * @param newS
 * @returns {string}
 */
function replaceClassName(element,oldS, newS) {
    element.className=element.className.replace(oldS, newS);
}
/**
 *  获取内部文本的兼容方法
 * @param element
 * @param text
 */
function getInnerText(element) {
    if (typeof element.innerText === 'string') {
        return element.innerText;
    }
    else {
        return element.textContent;
    }
}
/**
 *  设置内部文本的兼容方法
 * @param element
 * @param text
 */
function setInnerText(element,text) {
    if (typeof element.innerText === 'string') {
        element.innerText=text;
    }
    else {
        element.textContent=text;
    }
}
/**
 * 获取下一个兄弟元素的兼容写法
 * @param element
 * @returns {*}
 */
function getNextElementSibling(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 * 获取上一个兄弟元素的兼容写法
 * @param element
 * @returns {*}
 */
function getPreviousElementSibling(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && 1 !== prev.nodeType) {
            prev=prev.previousSibling;
        }
        return prev;
    }
}
/**
 * 封装 获取当前元素的第一个子元素
 * @param element
 * @returns {*}
 */
function getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var el = element.firstChild;//第一个子节点
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;//往后找
        }
        return el;
    }
    //return element.children[0];
}
/**
 * 封装 获取当前元素的最后一个子元素
 * @param element
 * @returns {*}
 */
function getLastElementChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var el = element.lastChild;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;//上一个兄弟节点
        }
        return el;
    }
    //return element.children[element.children.length-1];
}
//封装 通过类名获取元素对象的兼容方法
//function getElementsByClassName(element, className) {
//        //原来就有
//        if (element.getElementsByClassName) {
//            return element.getElementsByClassName(className);
//        } else {
//            //首先找到element里面所有的标签 然后判断 有没有我们要的类名
//            //如果有就把当前标签 放到一个集合中 最后全都找完了 把集合返回
//            var filterArr = [];//这个数组用来放匹配的元素
//            var elements = element.getElementsByTagName("*");//通配符 表示所有标签
//            for (var i = 0; i < elements.length; i++) {
//                if (elements[i].className.indexOf(className) !== -1) {
//                    //包含了我们要的类名 这个元素是我们要的
//                    filterArr.push(elements[i]);
//                }
//            }
//            return filterArr;
//        }
//    }
function getElementsByClassName(element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    } else {

    //找到所有的标签 判断是否有这个类名 有就放到数组里
    var filterArr = [];
    var elements = element.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        var nameArr = elements[i].className.split(" ");
        for (var j = 0; j < nameArr.length; j++) {
            if (nameArr[j] === className) {
                filterArr.push(elements[i]);
                break;
            }
        }
    }
    return filterArr;


    }
}
