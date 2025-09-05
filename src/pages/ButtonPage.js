import Button from "../components/Button";
import { GoBell, GoBeaker, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded className='mb-5'>
          <GoBell />
          Hi There!
        </Button>
      </div>
      <div>
        <Button success outline>Hello</Button>
      </div>
      <div>
        <Button danger rounded>
          <GoBeaker />
          Cuidado
        </Button>
      </div>
      <div>
        <Button warning>Puto</Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoDatabase />
          Second
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;