import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import "dotenv/config";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main(){
    await prisma.post.create({
        data:{
            title:"title of the post",
            content:"no content",
            // authorId:1, this will also work instead of logic below
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
}

main()
.then(async()=>{
    console.log("done with the query")
    await prisma.$disconnect()
})
.catch(async(e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})