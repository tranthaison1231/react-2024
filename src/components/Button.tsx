interface Props {
  color?: string;
  children: React.ReactNode;
}

export default function Button({ color = "red", children }: Props) {
  return (
    <button className="p-4" style={{ background: color }}>
      {children}
    </button>
  );
}
