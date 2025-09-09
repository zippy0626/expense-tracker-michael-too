import UploadForm from './UploadForm.tsx';

export default function Upload() {
  return (
    <section className="flex w-full flex-col">
      <h1 className="p-4 text-2xl font-bold">Upload documents</h1>
      <div className="h-full w-full min-w-[500px] flex justify-center items-center">
        {<UploadForm />}
      </div>
    </section>
  );
}
