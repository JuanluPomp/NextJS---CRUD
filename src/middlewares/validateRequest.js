import { TaskSchema } from "@/types";


export class validateRequest{
    static async validateTaskRequest(request){
        try {
            const body = await request.json().catch(() => null);
            if (!body) {
            return NextResponse.json(
                { error: "Cuerpo de la solicitud inválido" },
                { status: 400 }
            )
            }
            const response = await TaskSchema.safeParse(body)
            if(response.success){
                return  null
            }
        } catch (error) {
            return NextResponse.json(
                { error: "Datos ingresados no validos" },
                { status: 400 }
              )
        }
    }
}