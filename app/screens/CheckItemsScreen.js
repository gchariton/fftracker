import React, { useState } from 'react';

import InputScan from '../components/InputScan';
import ItemsList from '../components/ItemsList';
import Screen from './Screen';

function CheckItemsScreen({}) {
    const [submittedCode, setSubmittedCode] = useState('');
    const [trigger, setTrigger] = useState(false);

    const handleCodeSubmit = (code) => {
        setSubmittedCode(code);
        setTrigger(!trigger);
    };

    return (
        <Screen>
            <InputScan onCodeSubmit={handleCodeSubmit} />
            <ItemsList scannedCode={submittedCode} isTriggered={trigger} />
        </Screen>
    );
}

export default CheckItemsScreen;
