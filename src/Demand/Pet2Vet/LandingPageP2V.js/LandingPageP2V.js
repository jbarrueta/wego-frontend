import Button from "../../../Components/Button/Button";

export default function LandingPageP2V() {
  return (
    <>
      <div>
        <p className="tc primarySize">Pet2Vet</p>
        <p className="tc secondarySize mb3">
          Please select the kind of service you would like to request
        </p>
        <div className="center">
          <Button classNames="ma4">
            Pet <span className="light-red">2</span> Vet
          </Button>
          <Button classNames="ma4">
            Pet <span className="light-red">2</span> Home
          </Button>
        </div>
      </div>
    </>
  );
}
