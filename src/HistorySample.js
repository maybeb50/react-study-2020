import React, { useEffect } from 'react';

function HistorySample({ history }) {

    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push('/');
    };

    const replaceToHome = () => {
        history.replace('/');
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?');
        return () => {
            unblock();
        }
    }, [history]);

    return(
        <div>
            <button onClick={goBack}>뒤로 가기</button>
            <button onClick={goHome}>홈으로</button>
            <button onClick={replaceToHome}>홈으로 (Replace) / 방문 기록을 남기지 않는다.</button>
        </div>
    );
}

export default HistorySample;