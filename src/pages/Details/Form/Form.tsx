import classes from "./Form.module.scss";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../../../store/order-slice";

import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state: any) => state.cart);
  const { order } = useSelector((state: any) => state.order);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    secondName: yup.string().required(),
    address: yup.string().required(),
    shippingNote: yup.string(),
    postalCode: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    region: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: order.email,
      name: order.name,
      secondName: order.secondName,
      address: order.address,
      shippingNote: order.shippingNote,
      postalCode: order.postalCode,
      city: order.city,
      country: order.country,
      region: order.region,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addToOrder({ ...data, totalAmount }));
    navigate("/order/shipping");
  };

  return (
    <section className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.contact}>
          <h2>Contact</h2>
        </div>
        <input placeholder="Email" {...register("email")} />
        {errors.email && (
          <p className={classes.error}>{errors.email.message}</p>
        )}
        <div className={classes.shipping}>
          <h2>Shipping</h2>
          <div className={classes.input_divide}>
            <div className={classes.input_item}>
              <input placeholder="Name" {...register("name")} />
              {errors.name && (
                <p className={classes.error}>{errors.name.message}</p>
              )}
            </div>
            <div className={classes.input_item}>
              <input placeholder="Second Name" {...register("secondName")} />
              {errors.secondName && (
                <p className={classes.error}>{errors.secondName.message}</p>
              )}
            </div>
          </div>
          <div className={classes.input_divide}>
            <div className={classes.input_item}>
              <input placeholder="Adress and number" {...register("address")} />
              {errors.address && (
                <p className={classes.error}>{errors.address.message}</p>
              )}
            </div>
            <div className={classes.input_item}>
              <input
                placeholder="Shipping note (optional)"
                {...register("shippingNote")}
              />
              {errors.shippingNote && (
                <p className={classes.error}>{errors.shippingNote.message}</p>
              )}
            </div>
          </div>

          <div className={classes.input_divide}>
            <div className={classes.input_item}>
              <input placeholder="Postal Code" {...register("postalCode")} />
              {errors.postalCode && (
                <p className={classes.error}>{errors.postalCode.message}</p>
              )}
            </div>
            <div className={classes.input_item}>
              <input placeholder="City" {...register("city")} />
              {errors.city && (
                <p className={classes.error}>{errors.city.message}</p>
              )}
            </div>
          </div>
          <div className={classes.input_item}>
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
              control={control}
            />
            {errors.country && (
              <p className={classes.error}>{errors.country.message}</p>
            )}
          </div>
          <div className={classes.input_item}>
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
              control={control}
            />
          </div>
          {errors.region && (
            <p className={classes.error}>{errors.region.message}</p>
          )}
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
