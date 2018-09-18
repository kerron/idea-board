export const sortObjectByKey = (key = 'title') => {
    return function (objectA, objectB) {
        // property doesn't exist on either object
        if (!objectA.hasOwnProperty(key) || !objectB.hasOwnProperty(key)) {
            return 0;
        }

        const objectAProperty = (typeof objectA[key] === 'string') ?
            objectA[key].toUpperCase() : objectA[key];
        const objectBProperty = (typeof objectB[key] === 'string') ?
            objectB[key].toUpperCase() : objectB[key];

        let comparison = 0;
        if (objectAProperty > objectBProperty) {
            comparison = 1;
        } else if (objectAProperty < objectBProperty) {
            comparison = -1;
        }

        return (
            (key !== 'title') ? (comparison * -1) : comparison
        );
    };
}