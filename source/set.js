'use strict'

/**
 * Устанавливает значение во вложенном свойстве объекта
 * @param {object} object объект, вложенное свойство которого требуется изменить 
 * @param {string} props строка, содержащая путь к свойству
 * @param {*} val значение, которое требуется установить
 * @returns {object} объект, с изменённым вложенным свойством 
 */
const set = (object, props, val) => {
	const path = props.split('.')
	path.shift()
	path.reduce((obj, prop, idx) => {
		if (obj[prop] === undefined) {
            obj[prop] = {}
        }
        /**
         * здесь не нужен else, тк если последнего 
         * вложенного объекта не существует, то 
         * он будет создан, но значение не записано
         */
		if (idx === path.length - 1) {
            obj[prop] = val
        }
		return obj[prop]
    }, object)
    return object
}	