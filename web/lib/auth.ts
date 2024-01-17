// export const authOptions = {
//   adapter: PrismaAdapter(db as any),
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     GitHubProvider({
//       clientId: env.GITHUB_CLIENT_ID,
//       clientSecret: env.GITHUB_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async session({ token, session }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.image = token.picture;
//       }

//       return session;
//     },
//     async jwt({ token, user }) {
//       const dbUser = await db.user.findFirst({
//         where: {
//           email: token.email,
//         },
//       });

//       if (!dbUser) {
//         if (user) {
//           token.id = user?.id;
//         }
//         return token;
//       }

//       return {
//         id: dbUser.id,
//         name: dbUser.name,
//         email: dbUser.email,
//         picture: dbUser.image,
//       };
//     },
//   },
// };
