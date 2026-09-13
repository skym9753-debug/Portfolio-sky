export default function Hero() { // 자기소개 섹션
    return (
        <section className="max-w-5xl mx-auto px-6 py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-6">
                <span className="inline-block px-3.5 py-1 bg-[#F2D3A2]/40 text-[#A66A3F] text-sm font-semibold rounded-full border border-[#F2D3A2]">
                    Full-Stack Developer
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#2C2623] leading-tight">
                    안녕하세요, <br />
                    견고한 백엔드와 유연한 프론트엔드를 만드는 <br />
                    <span className="text-[#A66A3F]">개발자 김하늘</span>입니다.
                </h1>
                <p className="text-[#66584F] text-lg leading-relaxed max-w-xl">
                    Java/Spring 기반의 안정적인 웹 서비스 구조 설계와 React를 활용한 매끄러운 UI/UX 구현에 주력하고 있습니다.
                </p>
                <div className="flex gap-4 justify-center md:justify-start pt-2">
                    <a href="#projects" className="px-6 py-3 bg-[#A66A3F] text-white font-semibold rounded-lg shadow-md hover:bg-[#8C5530] transition-colors">
                        프로젝트 보기
                    </a>
                    <a href="https://github.com/skym9753-debug" target="_blank" rel="noreferrer" className="px-6 py-3 border border-[#A66A3F] text-[#A66A3F] font-semibold rounded-lg hover:bg-[#F2D3A2]/20 transition-colors">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}