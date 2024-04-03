import Card from "@/components/Card";

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="min-h-screen flex justify-center items-center font-bold text-6xl">
        Hero section
      </section>
      <section className="relative flex flex-col gap-[10vh] py-[10vh]">
        {images.map((img, idx) => (
          <Card key={idx} imgUrl={`/${img}`} />
        ))}
      </section>
    </main>
  );
}
