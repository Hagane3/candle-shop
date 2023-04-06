import classes from "./Form.module.scss";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Button from "../../../components/UI/Button/Button";

type Inputs = {
  contact: string;
  discount: boolean;
  name: string;
  secondName: string;
  address: string;
  shippingNote?: string;
  postalCode: string;
  city: string;
  country: string;
  region: string;
};

const Contact = () => {
  const { register, handleSubmit, control, watch } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.contact}>
          <div className={classes.contact_label}>
            <h2>Contact</h2>
            <p>
              Do you have an account? <span>Login</span>
            </p>
          </div>
        </div>
        <input
          placeholder="Email or mobile phone number"
          {...(register("contact"), { required: true })}
        />
        <div className={classes.discount}>
          <input type="checkbox" {...register("discount")} id="discount" />
          <label htmlFor="discount">
            Add me to Candleaf newsletter for a 10% discount
          </label>
        </div>
        <div className={classes.shipping}>
          <h2>Shipping</h2>
          <input
            placeholder="Name"
            {...(register("name"), { required: true })}
          />
          <input
            defaultValue="Second Name"
            {...(register("secondName"), { required: true })}
          />
          <input
            defaultValue="Adress and number"
            {...(register("address"), { required: true })}
          />
          <input
            defaultValue="Shipping note (optional)"
            {...register("shippingNote")}
          />
          <input
            defaultValue="Postal Code"
            {...(register("postalCode"), { required: true })}
          />
          <input
            defaultValue="City"
            {...(register("city"), { required: true })}
          />
          <Controller
            name="country"
            render={({ field: { name, value, onChange } }) => (
              <CountryDropdown
                name={name}
                value={value}
                onChange={onChange}
                classes={classes.dropdown}
              />
            )}
            rules={{ required: true }}
            control={control}
          />
          <Controller
            name="region"
            render={({ field: { name, value, onChange } }) => (
              <RegionDropdown
                country={watch("country")}
                name={name}
                value={value}
                onChange={onChange}
                classes={classes.dropdown}
              />
            )}
            rules={{ required: true }}
            control={control}
          />
        </div>
        <div className={classes.btn_container}>
          <Button width={100} submit={true}>
            Go to shipping
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
