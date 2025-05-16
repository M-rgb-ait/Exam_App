// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";




// export default async function Token() {
//   const authCookie = cookies().get("next-auth.session-token")?.value;
//   const token = await decode({
//       token: authCookie,
//       secret: process.env.NEXTAUTH_SECRET!,
//     });
    
//         return token?.token;

// }


// export default async function Token() {
//     const authCookie = cookies().get('next-auth.session-token')?.value;

//     if (!authCookie) {
//       console.error("No auth cookie found");
//       return <div>Unauthorized</div>;
//     }
    
//     let token;
    
//     try {
//       token = await decode({
//         token: authCookie,
//         secret: process.env.NEXTAUTH_SECRET!,
//       });
//     } catch (error) {
//       console.error("JWT Decode Error:", error);
//       return <div>Invalid token</div>;
//     }
    
//     return <ExamApi token={token?.token} />;

// }