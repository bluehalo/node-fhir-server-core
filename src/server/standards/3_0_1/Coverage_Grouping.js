const BackboneElement = require('./BackboneElement');

class Coverage_Grouping extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Coverage_Grouping';
	}

	// Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify an employer group. May also be referred to as a Policy or Group ID.
	get group () {
		return this._group;
	}

	set group ( new_value ) {
		this._group = new_value;
	}

	// A short description for the group.
	get groupDisplay () {
		return this._groupDisplay;
	}

	set groupDisplay ( new_value ) {
		this._groupDisplay = new_value;
	}

	// Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a subset of an employer group.
	get subGroup () {
		return this._subGroup;
	}

	set subGroup ( new_value ) {
		this._subGroup = new_value;
	}

	// A short description for the subgroup.
	get subGroupDisplay () {
		return this._subGroupDisplay;
	}

	set subGroupDisplay ( new_value ) {
		this._subGroupDisplay = new_value;
	}

	// Identifies a style or collective of coverage issued by the underwriter, for example may be used to identify a collection of benefits provided to employees. May be referred to as a Section or Division ID.
	get plan () {
		return this._plan;
	}

	set plan ( new_value ) {
		this._plan = new_value;
	}

	// A short description for the plan.
	get planDisplay () {
		return this._planDisplay;
	}

	set planDisplay ( new_value ) {
		this._planDisplay = new_value;
	}

	// Identifies a sub-style or sub-collective of coverage issued by the underwriter, for example may be used to identify a subset of a collection of benefits provided to employees.
	get subPlan () {
		return this._subPlan;
	}

	set subPlan ( new_value ) {
		this._subPlan = new_value;
	}

	// A short description for the subplan.
	get subPlanDisplay () {
		return this._subPlanDisplay;
	}

	set subPlanDisplay ( new_value ) {
		this._subPlanDisplay = new_value;
	}

	// Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage such as a level of deductables or co-payment.
	get class () {
		return this._class;
	}

	set class ( new_value ) {
		this._class = new_value;
	}

	// A short description for the class.
	get classDisplay () {
		return this._classDisplay;
	}

	set classDisplay ( new_value ) {
		this._classDisplay = new_value;
	}

	// Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a subclass of coverage such as a sub-level of deductables or co-payment.
	get subClass () {
		return this._subClass;
	}

	set subClass ( new_value ) {
		this._subClass = new_value;
	}

	// A short description for the subclass.
	get subClassDisplay () {
		return this._subClassDisplay;
	}

	set subClassDisplay ( new_value ) {
		this._subClassDisplay = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			group: this._group,
			groupDisplay: this._groupDisplay,
			subGroup: this._subGroup,
			subGroupDisplay: this._subGroupDisplay,
			plan: this._plan,
			planDisplay: this._planDisplay,
			subPlan: this._subPlan,
			subPlanDisplay: this._subPlanDisplay,
			class: this._class,
			classDisplay: this._classDisplay,
			subClass: this._subClass,
			subClassDisplay: this._subClassDisplay
		});
	}

}

module.exports = Coverage_Grouping;
