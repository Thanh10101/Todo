import Link from "next/link";
// import { useRouter } from "next/router";
// import { useReducer } from "react";
// import { useRouter } from "next/router";
export default function LinkHome() {


// ✔ Dùng Link khi bạn muốn điều hướng thông qua một thẻ liên kết (<a>
  return (
   <>
   <div>Link component</div>
        <Link href="/useState">useState</Link><br></br>
        <Link href="/useContext">useContext</Link><br></br>
        <Link href="/useMemo">useMemo</Link><br></br>
        <Link href="/useRef">useRef</Link><br></br>
        <Link href="/useCallback">useCallback</Link><br></br>
        <Link href="/useContext">useContext</Link><br></br>
        <Link href="/useReducer">useReducer</Link><br></br>
        <Link href="/useOptimistic">useOptimistic</Link><br></br>
        <Link href="/useActionState">useActionState</Link><br></br>
        <Link href="/useDebugValue">useDebugValue</Link><br></br>
        <Link href="/useFormStatus">useFormStatus</Link><br></br>
        <Link href="/useImperativeHandle">useImperativeHandle</Link><br></br>
        <Link href="/useLayoutEffect">useLayoutEffect</Link><br></br>
        <Link href="/use">use</Link><br></br>
   </>
  );
}
