import {useEffect} from 'react';
import {getChangeKey} from '../utils';
import {useCollection} from './helpers';

export default (hunks, {multiple = false} = {}) => {
    const {collection, clear, toggle, only} = useCollection();
    useEffect(clear, [hunks]);

    return [
        collection,
        ({change}) => {
            const changeKey = getChangeKey(change);
            if (multiple) {
                toggle(changeKey);
            }
            else {
                only(changeKey);
            }
        },
    ];
};
