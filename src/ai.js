import React, { useState } from 'react';
import axios from 'axios';
import './output.css';

function GenerateImage() {
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태
    const [generatedImage, setGeneratedImage] = useState(null); // 생성된 이미지 URL
    const [error, setError] = useState(false); // 에러 상태

    const handleGenerateImage = async () => {
        setIsLoading(true); // 로딩 시작
        setGeneratedImage(null); // 기존 이미지 초기화
        setError(false); // 에러 초기화

        try {
            const response = await axios.post('/api/image/generate', {
                // API 요청의 필요한 body 값을 작성합니다.
                input: 'string', // 예시 값
            });

            // 응답 데이터에서 이미지 URL 가져오기
            if (response.data && response.data.imageUrl) {
                setGeneratedImage(response.data.imageUrl);
            } else {
                throw new Error('이미지 URL을 가져오지 못했습니다.');
            }
        } catch (err) {
            console.error('이미지 생성 실패:', err);
            setError(true); // 에러 상태로 설정
        } finally {
            setIsLoading(false); // 로딩 종료
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* 이미지 생성 버튼 */}
            <button
                onClick={handleGenerateImage}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                disabled={isLoading}
            >
                {isLoading ? '이미지 생성 중...' : '이미지 생성하기'}
            </button>

            {/* 로딩 메시지 */}
            {isLoading && <p className="mt-4 text-gray-700">이미지를 생성 중입니다. 잠시만 기다려 주세요...</p>}

            {/* 에러 메시지 */}
            {error && <p className="mt-4 text-red-500">이미지 생성에 실패했습니다. 예시 이미지를 표시합니다.</p>}

            {/* 이미지 출력 */}
            <div className="mt-6">
                <img
                    src={
                        error
                            ? process.env.PUBLIC_URL + "/img/ai.png" // 예시 이미지 URL
                            : generatedImage
                    }
                    alt="Generated"
                    className="w-96 h-96 object-cover rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}

export default GenerateImage;
