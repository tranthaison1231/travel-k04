import { useNavigate } from "react-router";
import { Button } from "~/shared/ui/Button";

export default function Services() {
  let navigate = useNavigate();

  return (
    <div>
      Services
      <Button onClick={() => navigate("/membership")}>
        <div className="text-red-500">MemberShip</div>
      </Button>
    </div>
  );
}
