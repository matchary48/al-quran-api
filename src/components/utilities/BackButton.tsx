import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <>
      <button onClick={handleBack} className="p-4 flex gap-1 ">
        <ArrowLeft /> KEMBALI
      </button>
    </>
  );
};

export default BackButton;
