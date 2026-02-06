interface Props {
  title: string;
  text: string;
  colour: string;
}

export default function InfoBlock({ title, text, colour }: Props) {
  return (
    <div className={`p-10 rounded-2xl bg-[${colour}] text-[#052c2f]`}>
      <h3 className="font-heading text-4xl mb-4">{title}</h3>
      <p className="text-lg">{text}</p>
    </div>
  );
}
