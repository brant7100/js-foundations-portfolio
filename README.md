# JS Foundations Portfolio Starter

이 저장소는 **자바스크립트 기초 학습 기록**을 남기고, 동시에 **GitHub Pages 포트폴리오 사이트**로 공개하는 최소 템플릿입니다.

## 구조
```
.
├─ docs/            # GitHub Pages에 공개되는 사이트 (Pages 소스: /docs)
│  ├─ index.html    # 포트폴리오 홈 (logs.json을 읽어 로그 목록을 보여줌)
│  ├─ logs/         # 일자별 학습 로그(markdown)
│  ├─ assets/       # 프론트 스크립트
│  └─ logs.json     # 공개할 로그 목록(제목/파일 경로/태그/작성일)
├─ notes/           # 개인 노트(비공개로도 사용 가능)
├─ exercises/       # 실습 코드(작은 예제/위젯)
└─ .gitignore
```
> **주의**: GitHub Pages는 디렉터리 목록을 자동으로 읽을 수 없어서, `docs/logs.json`을 **직접 업데이트**해야 목록에 나타납니다.

## GitHub Pages 설정
1. 저장소 생성(공개) → Settings → **Pages** → *Source: `Deploy from a branch`*  
2. Branch: `main`, **Folder: `/docs`** → Save  
3. 잠시 후 `https://<YOUR_ID>.github.io/<REPO_NAME>` 로 접속

## 일일 워크플로우 (아주 단순)
1. 새 로그 파일 만들기  
   ```bash
   # 날짜 기반 파일 복사
   cp docs/logs/_template.md docs/logs/$(date +%Y-%m-%d).md
   ```
2. `docs/logs.json`의 `items` 배열에 새 항목 추가
   ```json
   {
     "title": "Day 001 - 변수/함수 기초",
     "path": "logs/2025-11-04.md",
     "tags": ["JS", "기초"],
     "date": "2025-11-04"
   }
   ```
3. 커밋 & 푸시
   ```bash
   git add .
   git commit -m "docs: add log Day 001 (변수/함수 기초)"
   git push origin main
   ```
4. 포트폴리오 사이트에서 새 로그가 자동으로 목록에 표시됩니다.

## 커밋 메시지 규칙(권장)
- `feat:` 새 기능/예제 추가
- `docs:` 문서/로그/README 업데이트
- `fix:` 버그 수정
- `chore:` 환경/설정/잡일
- 예) `docs: add Day 003 log – 배열 메서드(map/filter)`

## 시작 가이드
- **오늘 할 일(30분 버전)**
  1) `docs/logs/_template.md` 복사 → 오늘 날짜 파일 생성  
  2) `docs/logs.json`에 한 줄 추가  
  3) `exercises/toggle/` 예제 열고 버튼 토글 동작 확인  
  4) 스크린샷/GIF를 로그 파일에 첨부(선택)
