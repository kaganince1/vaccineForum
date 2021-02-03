import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";
import { Badge } from "reactstrap";

const UserDetail = ({ categories, user, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2><Badge color="warning">{user.id ? "Güncelle" : "Ekle"}</Badge></h2>
      <TextInput
        name="userName"
        label="Kullanıcı İsmi"
        value={user.userName}
        onChange={onChange}
        error={errors.userName}
      ></TextInput>
      <SelectInput
        name="categoryId"
        label="Kategori"
        value={user.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}
      ></SelectInput>
      <TextInput
        name="userComment"
        label="Yorum"
        value={user.userComment}
        onChange={onChange}
        error={errors.userComment}
      ></TextInput>
      <TextInput
        name="userEffects"
        label="Yan Etkileri"
        value={user.userEffects}
        onChange={onChange}
        error={errors.userEffects}
      ></TextInput>
      <TextInput
        name="point"
        label="Puan"
        value={user.point}
        onChange={onChange}
        error={errors.point}
      ></TextInput>
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};
export default UserDetail;
