# 📋 업무 현황 통합 관리 시스템 (Work Management System)

구글 시트를 간이 데이터베이스(DB)로 활용하여 기업인터넷 및 스마트뱅킹 업무 일정을 관리하고 시각화하는 반응형 웹 애플리케이션.

## ✨ 주요 기능
* **양방향 데이터 연동**: Google Apps Script(GAS)를 통한 구글 시트 데이터 실시간 조회 및 수정
* **다중 뷰 지원**: 업무 일정을 캘린더 뷰(FullCalendar) 및 간트차트 뷰(Frappe Gantt)로 전환하여 확인 가능
* **통계 및 필터링**: 진행 상태별(작업 대기, 진행중, 적용 완료 등) 건수 확인 및 채널별(전체/인터넷/스마트) 필터링 제공
* **상태 서랍(Drawer)**: 통계 카드 클릭 시 해당 상태의 전체 요구사항 목록을 사이드 패널 형태로 조회
* **데이터 오류 방어**: 날짜 누락 및 형식 오류 데이터 발생 시 간트차트 내 `[날짜확인]` 태그로 예외 처리 및 렌더링 오류 방지

## 🛠 기술 스택
* **Frontend**: HTML5, CSS3, Vanilla JavaScript, Bootstrap 5.3
* **Libraries**: FullCalendar.js 6.1, Frappe Gantt 0.6.1
* **Backend / DB**: Google Apps Script (GAS), Google Sheets
* **Deployment**: GitHub Pages

## 🚀 설치 및 실행 방법

### 1. 구글 시트 데이터베이스 구성
1. 신규 구글 시트 생성
2. `인터넷`, `스마트` 2개의 시트(탭) 생성
3. 1행에 필수 헤더 입력 (`요구사항 ID`, `진행단계`, `요건명`, `접수일자`, `운영이관(예정)일` 등)

### 2. Google Apps Script (GAS) 배포
1. 구글 시트 메뉴에서 `확장 프로그램` > `Apps Script` 클릭
2. 사전에 작성된 `.gs` 백엔드 코드 붙여넣기 및 `SPREADSHEET_ID` 변수 업데이트
3. `배포` > `새 배포` > 유형을 `웹 앱`으로 설정
4. 액세스 권한을 `모든 사용자`로 설정 후 배포 완료
5. 생성된 `웹 앱 URL` 복사

### 3. 프론트엔드 환경 설정
1. 본 저장소의 `index.html` 파일 오픈
2. 스크립트 영역 상단의 `GAS_WEB_APP_URL` 변수 값을 복사한 웹 앱 URL로 교체
```javascript
const GAS_WEB_APP_URL = '발급받은_웹_앱_URL_입력';

### 4. 배포 (GitHub Pages)
코드 변경 사항 Commit 및 Push

저장소 Settings > Pages 이동

Source를 main 브랜치로 설정하여 배포 후 라이브 URL 접속 확인

📂 파일 구조
index.html : UI 구성, 스타일(CSS), 비즈니스 로직(JS)을 모두 포함한 단일 프론트엔드 파일

gas_backend.gs : (참고용) 구글 시트 데이터 처리를 위한 Apps Script 코드

📝 라이선스
해당 프로젝트는 사내 업무 현황 관리를 목적으로 제작된 커스텀 시스템임.


---

수정 및 추가 필요 항목 존재 시 회신 요망.
