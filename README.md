# Bộ PWA – Sổ chủ nhiệm điện tử

Các file cốt lõi để đưa lên GitHub Pages:

- `index.html` – ứng dụng chính (giữ nguyên giao diện/chức năng, chỉ bổ sung liên kết PWA)
- `manifest.webmanifest` – khai báo PWA
- `sw.js` – Service Worker cho cache/offline; không chặn các yêu cầu POST/API đồng bộ
- `icon-192.png` – biểu tượng 192×192
- `icon-512.png` – biểu tượng 512×512

## Đưa lên GitHub Pages
1. Tải **các file đã giải nén**, không tải nguyên ZIP vào repository.
2. Đặt các file ngay thư mục gốc của nhánh `main`.
3. GitHub: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
4. Chờ mục Actions/Pages build có dấu xanh rồi mở link Pages.

## Lưu ý
- HTML gốc có cơ chế đồng bộ trực tuyến/backend. Service Worker trong bộ này chỉ cache các file tĩnh cùng nguồn và bỏ qua POST/PUT, nên không thay đổi luồng đồng bộ.
- Thư viện XLSX đang được tải từ CDN; tính năng Excel cần Internet khi thư viện chưa có trong cache/trình duyệt.
