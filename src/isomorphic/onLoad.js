import { useEffect } from 'react';
import isBackend from '../utils/isBackend';

export default function(cb) {
    if (isBackend()) {
        return cb();
    }
    return useEffect(cb, []);
}
