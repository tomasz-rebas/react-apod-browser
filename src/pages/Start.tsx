import { css } from '@emotion/css';
import { useState, useEffect } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

export default function Start() {    

    const [inputDateRanges, setInputDateRanges] = useState<any>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    useEffect(() => {
        console.log(inputDateRanges);
    }, [inputDateRanges]);

    return (
        <div>
            <DateRangePicker
                ranges={inputDateRanges}
                months={2}
                direction="horizontal"
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                onChange={(item: any) => setInputDateRanges([item.selection])}
            />
        </div>
    );
}