export default function userProfile({params}:any){
    return (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-blue-500">Profile</h1>
            <hr />
            <p className="text-4xl">profile page {params.id}</p>
          </div>
        </>
      );
}