import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";

interface CheckBoxItems {
  value: string | number;
  lable: string;
  count: number;
}

interface Props {
  title: string;
  radioItems: CheckBoxItems[];
  isRaiting?: boolean;
}

const CheckboxGroupBox = (props: Props) => {
  const { title, radioItems, isRaiting = false } = props;

  const formControlLabelStyle = {
    "& .MuiFormControlLabel-label": {
      width: "100%",
    },
  };

  return (
    <FormGroup className="w-full">
      <FormLabel className="text-base-black text-xl font-semibold	">
        {title}
      </FormLabel>

      {radioItems.map((item) => (
        <FormControlLabel
          control={<Checkbox value={item.value} />}
          sx={{ ...formControlLabelStyle }}
          label={
            <div className="flex justify-between">
              {!isRaiting ? (
                <p>{item.lable}</p>
              ) : (
                <div className="flex">
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.value}
                    precision={0.5}
                    readOnly
                  />
                  <p>&Up</p>
                </div>
              )}
              <p>{item.count}</p>
            </div>
          }
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxGroupBox;
