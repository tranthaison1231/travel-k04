import { useNavigate } from "react-router";
import { Button } from "../shared/ui/Button";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/dashboard/settings")} />
      About
    </div>
  );
}
