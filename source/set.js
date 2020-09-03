'use strict'

const set = (object, props, val) => {
	const path = props.split('.')
	path.shift()
	path.reduce((obj, prop, idx) => {
		if (obj[prop] === undefined) {
            obj[prop] = {}
        }
		if (idx === path.length - 1) {
            obj[prop] = val
        }
		return obj[prop]
    }, object)
    return object
}	