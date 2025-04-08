import { auth, db } from "@/firebase/admin";

export async function getInterviewByUserId(userId: string): Promise<Interview[]| null> {
    const interviews = await db
      .collection("interviews")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get()
  
     return interviews.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  
     }))as Interview[];
  }
  
  export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
    const { userId, limit = 20 } = params;
  
    const interviews = await db
      .collection("interviews")
      .where("finalized", "==", true)
      .where("userId", "!=", userId)
      .orderBy("userId") // This is REQUIRED due to the '!=' filter
      .orderBy("createdAt", "desc")
      .limit(limit)
      .get();
  
    return interviews.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Interview[];
  }
  

  export async function getInterviewById(id: string): Promise<Interview| null> {
    const interviews = await db
      .collection("interviews")
      .doc(id)
      .get()
  
     return interviews.data() as Interview | null;
  }