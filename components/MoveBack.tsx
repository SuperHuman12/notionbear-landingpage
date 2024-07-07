"use client";
import { goBack } from '@/app/utils/helper';
import React from 'react';

const MoveBack: React.FC = () => {

    return (
        <div onClick={goBack} className='mb-4 cursor-pointer'>
            ← Take me back
        </div>
    );
};

export default MoveBack;