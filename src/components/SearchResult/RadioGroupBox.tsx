import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface GroupItems {
  value: string;
  lable: string;
}

interface Props {
  title: string;
  radioItems: GroupItems[];
}

const RadioGroupBox = (props: Props) => {
  const { title, radioItems } = props;

  return (
    <>
      <FormControl>
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
              value={item.value}
              control={<Radio />}
              label={item.lable}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioGroupBox;
