# argo-cicd-api

**Node.js 기반 To-Do API 서버**로, **Terraform, Argo CD, GitHub Actions, EKS** 등을 활용하여 완전 자동화된 **CI/CD 파이프라인**을 구축한 프로젝트입니다.

이 프로젝트는 DevOps 환경에서의 인프라 구축 및 자동화된 애플리케이션 배포 경험을 포트폴리오로 정리하기 위해 제작되었습니다.

---

## ✨ 주요 기능

- ✅ 사용자 인증 (JWT 기반)
- 📝 할 일(To-Do) 항목에 대한 CRUD API
- 🐳 Docker 컨테이너화 및 Amazon EKS 배포
- 🔁 GitOps 기반 CI/CD 자동화 (GitHub Actions + Argo CD)
- ☁️ Terraform을 통한 인프라 코드 관리
- 📦 MongoDB를 이용한 데이터 저장

---

## 🛠 사용 기술 스택

| 분류         | 기술명                             |
|--------------|-------------------------------------|
| 백엔드       | Node.js, Express                    |
| 데이터베이스 | MongoDB                             |
| 인증         | JWT                                 |
| 컨테이너     | Docker                              |
| CI/CD        | GitHub Actions, Argo CD             |
| IaC          | Terraform                           |
| 배포 환경    | Amazon EKS (Kubernetes)             |

---

## 📁 프로젝트 구조

```text
argo-cicd-api/
├── app/                  # Node.js API 서버 코드
│   ├── src/              # 라우터, 컨트롤러, 모델 등
│   ├── Dockerfile        # 애플리케이션용 Dockerfile
│   ├── .env.example      # 환경변수 예시 파일
│   └── package.json
├── infra/                # Terraform 코드
│   ├── eks/              # EKS 클러스터 관련 코드
│   └── ecr/              # 컨테이너 레지스트리 관련 코드
├── manifests/            # GitOps용 K8s 매니페스트 (dev/prod)
│   ├── dev/
│   └── prod/
├── .github/workflows/    # GitHub Actions 워크플로우 파일
└── README.md
```
---

## 🚀 배포 플로우

1. 개발자가 GitHub에 코드 푸시
2. GitHub Actions가 Docker 이미지를 빌드 후 Amazon ECR에 푸시
3. K8s 매니페스트 레포지토리에 이미지 태그 업데이트
4. Argo CD가 변경사항 감지 후 EKS에 자동 배포

---

## 🧪 로컬 개발 방법

```bash
cd app
npm install
npm run dev
