"use client"
import { useRouter } from 'next/navigation'
export default function RouteHome() {
// ✔ Dùng useRouter khi bạn muốn điều hướng bằng code, ví dụ:
const router = useRouter();
const handleRouter = (path: string, params?: Record<string, string | number>) => {
  if(params){
    const queryString =new URLSearchParams(params as Record<string, string>).toString();
    const url=`${path}:${queryString}`;
    router.push(url);
    console.log(url);
  }
  router.push(path);
};
// handleRouter("/profile", { userId: 123, ref: "google" });
// Điều hướng sau khi đăng nhập thành công.
// Điều hướng dựa trên điều kiện (nếu chưa đăng nhập, chuyển hướng đến /login).
// Lấy thông tin route hiện tại (pathname, query params).

// ✔ Dùng Link khi bạn muốn điều hướng thông qua một thẻ liên kết (<a>
  return (
   <>
   <div>
    useRouter nextjs
   </div>
      <button type="button" onClick={()=>handleRouter("/useState")}>useState</button>
      <button type="button" onClick={()=>handleRouter("/useState",{ userId: 123, ref: "google" })}>useState</button>
   </>
  );
}
