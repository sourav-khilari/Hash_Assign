import {configureStore} from '@reduxjs/toolkit';
import red from '../features/todoSlice'

export const store=configureStore(
    {
        reducer:red
    }
)