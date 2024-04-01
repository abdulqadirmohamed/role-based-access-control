import prisma from '@/lib/prismadb';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any, req) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user) {
                    return null;
                }

                const valid = await bcrypt.compare(credentials.password, user.password);

                if (!valid) {
                    console.log(`Credentials not valid`);
                    return null;
                }

                if (user) {
                    return { ...user, email: user.email };
                }
                return null;
            }
        })
    ]
});