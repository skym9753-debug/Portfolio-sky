export default function Projects() {
    const projectList = [
        {
            title: "축제로 (FestaRoot)",
            subTitle: "React + SpringBoot 기반 2차 프로젝트",
            summary: "생성형 AI를 활용한 맞춤형 여행 추천 및 지역 축제 통합 플랫폼",
            period: "2026.05 ~ 2026.06",
            tech: ["React", "SpringBoot", "Tailwind CSS", "Google Cloud Storage", "Nginx", "GitHub Actions"],
            link: "https://festaroute.site/",
            roles: [
                "Git Manager 역할 수행: 브랜치 전략 수립, 코드 PR 승인 및 충돌(Conflict) 해결 주도",
                "카카오 맵 API 연동을 통한 실시간 위치 기반 지도 표기 및 커스텀 오버레이 popup 시스템 구축",
                "한국관광공사 TourAPI 연동 및 데이터 연동 에러 핸들링",
                "React Router 중첩 라우팅 및 Zustand를 통한 전역 상태 관리 레이어 설계"
            ]
        },
        {
            title: "우리 동네.zip (Local_Zip)",
            subTitle: "Spring MVC / Spring Legacy 기반 1차 프로젝트",
            summary: "Ajax 비동기 통신으로 사용자 편의성을 높인 지역 기반 커뮤니티 플랫폼 구현",
            period: "2026.03 ~ 2026.04",
            tech: ["Spring MVC", "jQuery", "Git", "GitHub", "Firebase", "Amazon AWS"],
            link: "http://13.209.40.95/",
            roles: [
                "Git Manager 역할 수행: 브랜치 전략 수립, 코드 PR 승인 및 충돌(Conflict) 해결 주도",
                "카카오 맵 API 연동을 통한 실시간 위치 기반 지도 표기 및 커스텀 오버레이 popup 시스템 구축",
                "한국관광공사 TourAPI 연동 및 데이터 연동 에러 핸들링",
                "위치 기반 및 공공 데이터를 융합한 지역 주민 맞춤형 커뮤니티 웹 서비스 구축"
            ]
        }
    ];

    return (
        <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C2623] mb-8 pb-3 border-b border-[#EFE8DC]">
                Featured Projects
            </h2>
            <div className="flex flex-col gap-8">
                {projectList.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white border border-[#EFE8DC] rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-[#A66A3F]/40 transition-all flex flex-col justify-between"
                    >
                        <div>
                            {/* 상단 헤더: 구분 타이틀 및 외부 사이트 방문 버튼 */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                                <div>
                                    <span className="inline-block text-xs font-semibold text-[#A66A3F] bg-[#F2D3A2]/30 px-2.5 py-1 rounded-md mb-2">
                                        {project.subTitle}
                                    </span>
                                    <h3 className="text-2xl font-bold text-[#2C2623]">
                                        {project.title}
                                    </h3>
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-white bg-[#A66A3F] hover:bg-[#8C5530] px-4 py-2 rounded-lg transition-colors shrink-0 self-start sm:self-auto"
                                >
                                    방문하기 ↗
                                </a>
                            </div>

                            {/* 요약 & 진행 기간 */}
                            <p className="text-[#66584F] font-medium text-sm md:text-base mb-1">
                                {project.summary}
                            </p>
                            <p className="text-xs text-[#8C7A6B] mb-6">
                                🗓️ 진행 기간: {project.period}
                            </p>

                            {/* 핵심 사용 기술 */}
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-[#2C2623] uppercase tracking-wider mb-2">
                                    ⚙️ 핵심 사용 기술
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-[#FDFBF7] border border-[#EFE8DC] text-[#A66A3F] text-xs font-semibold rounded-md"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 주요 구현 및 역할 */}
                            <div>
                                <h4 className="text-xs font-bold text-[#2C2623] uppercase tracking-wider mb-2">
                                    📌 주요 구현 및 역할
                                </h4>
                                <ul className="space-y-1.5 text-sm text-[#66584F] list-disc list-inside">
                                    {project.roles.map((role, i) => (
                                        <li key={i} className="leading-relaxed">
                                            {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}