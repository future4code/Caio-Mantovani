import * as fs from 'fs'

export class JSONFileManager{
    private filename: string = 'data.json'

    public readDatabase(){
        try {
            return JSON.parse(fs.readFileSync('./$this.fileName').toString())
        } catch (error) {
            return []

        }
        
    }
    public writeToDatabase(data: any) : void{
        const dataAsString: string = JSON.stringify(data)
        fs.writeFileSync('./${this.filename}', dataAsString)
    }
}