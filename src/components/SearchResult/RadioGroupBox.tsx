import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface GroupItems {
  value: string;
  lable: string;
  count: number;
}

interface Props {
  title: string;
  radioItems: GroupItems[];
}

const RadioGroupBox = (props: Props) => {
  const { title, radioItems } = props;

  const formControlLabelStyle = {
    "& .MuiFormControlLabel-label": {
      width: "100%",
    },
  };

  return (
    <>
      <FormControl className="w-full">
        <FormLabel
          id="demo-radio-buttons-group-label"
          className="text-base-black text-xl font-semibold	"
        >
          {title}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={radioItems[0].value}
          name="radio-buttons-group"
        >
          {radioItems.map((item, index) => (
            <FormControlLabel
              key={index}
              sx={{ ...formControlLabelStyle }}
              value={item.value}
              control={<Radio />}
              label={
                <div className="flex justify-between">
                  <p>{item.lable}</p>
                  <p>{item.count}</p>
                </div>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioGroupBox;
