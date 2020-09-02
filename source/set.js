'use strict';

function set(object, keys, value)
{
    let objectPart = object;
    let path = keys.split('.');
    path.shift();

    for(let i = 0; i < path.length - 1; i++)
    {
        if(isEmpty(objectPart))
            objectPart[path[i]] = {};

        objectPart = objectPart[path[i]];
    }

    objectPart[path[path.length - 1]] = value;
    return object;
}


function isEmpty(obj)
{
    for (let key in obj)
        return false;

    return true;
}

